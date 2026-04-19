"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Field, FieldLabel } from "../ui/field";
import { Button } from "../ui/button";
import { deleteCookie, getCookie, saveCookie } from "@/lib/cookies";
import getKeyInfo, { checkAPIKey } from "@/lib/api/key/info";
import {toast} from "sonner";
import { isTornError } from "@/lib/api/errors/errors";
import { useEffect, useState } from "react";


export default function LoginField() {


    const [apikey, setApikey] = useState("");

    useEffect(() => {
        async function fetchKey() {
            const key = await getCookie("tornly:apikey");
            if (key) setApikey(key);
        }
        fetchKey();
    }, []);

    
    
    async function handleSubmit(data: FormData) {
      saveCookie(data.get("api-key") as string);
      const response = await getKeyInfo();

      if (!response || isTornError(response)) {
        deleteCookie("tornly:apikey");
        toast.error("Invalid API Key. Please try again.");
        return;
      }

      if (await checkAPIKey(response)) {
        toast.success("Successfully logged in!", {
          onAutoClose: () => {
            window.location.href = "/dashboard";
          },
        });
      } else {
        deleteCookie("tornly:apikey");
        toast.error("Invalid API Key. Please try again.");
      }
    }



    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Login</CardTitle>
            </CardHeader>
            <CardContent>
                <form action={handleSubmit} className="grid w-full items-center gap-4">
                    <Field className="grid w-full items-center gap-2">
                        <FieldLabel>API Key</FieldLabel>
                        <Input name="api-key" id="api-key" placeholder={apikey} defaultValue={apikey}  />
                        <Button type="submit">Login</Button>
                    </Field>
                </form>
            </CardContent>
            <CardFooter className="text-xs">
                Your API Key is saved in your browser as a cookie, and your logs are stored in localstorage. We never send your API Key to our servers, and we never have access to it.
            </CardFooter>
        </Card>
    );
}