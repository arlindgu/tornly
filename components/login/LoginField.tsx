"use client";
import { Input } from "../ui/input";
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldSeparator } from "../ui/field";
import { Button } from "../ui/button";
import { deleteCookie, getCookie, saveCookie } from "@/lib/cookies";
import getKeyInfo, { checkAPIKey } from "@/lib/api/key/info";
import {toast} from "sonner";
import { useEffect, useState } from "react";
import { isSuccess } from "@/lib/api/errors/errors";
import { cn } from "@/lib/utils";
import { Spinner } from "../ui/spinner";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "../ui/empty";
import { Check } from "lucide-react";


export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
    const [apikey, setApikey] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);


    useEffect(() => {
        async function fetchKey() {
            const key = await getCookie("tornly:apikey");
            if (key) setApikey(key);
        }
        fetchKey();
    }, []);

    async function handleSubmit(data: FormData) {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 500));

      saveCookie(data.get("api-key") as string);
      const response = await getKeyInfo();

      // ✅ Prüfe ob Success
      if (!isSuccess(response)) {
        deleteCookie("tornly:apikey");
        toast.error("Invalid API Key. Please try again.");
        setSuccess(false);
        setLoading(false);
        return;
      }

      // ✅ Ab hier: response.data ist verfügbar
      if (await checkAPIKey(response.data)) {
        setSuccess(true);
        setLoading(false);
        toast.success("Successfully logged in!", {
          onAutoClose: () => {
            window.location.href = "/dashboard";
          },
        });
      } else {
        deleteCookie("tornly:apikey");
        toast.info("API Key does not have the correct permissions. Please provide a Full Access API Key.");
        setSuccess(false);
        setLoading(false);
      }

    }

    if (success) {
        return (
          <Empty className="w-full">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <Check className="size-4" />
              </EmptyMedia>
              <EmptyTitle>API Key Verified</EmptyTitle>
              <EmptyDescription>
                Your API Key has been verified and has the correct permissions.
              </EmptyDescription>
              <EmptyDescription>
                You will be redirected to the dashboard shortly.
              </EmptyDescription>
            </EmptyHeader>
          </Empty>
        );
    }

    if (loading) {
        return (
          <Empty className="w-full">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <Spinner />
              </EmptyMedia>
              <EmptyTitle>We are processing your API Key</EmptyTitle>
              <EmptyDescription>
                Please wait while we verify your API Key has the correct
                permissions and is valid.
              </EmptyDescription>
            </EmptyHeader>
          </Empty>
        );
    }



    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          handleSubmit(formData);
        }}
        className={cn("flex flex-col gap-6", className)}
        {...props}
      >
        <FieldGroup>
          <div className="flex flex-col items-center gap-1 text-center">
            <h1 className="text-2xl font-bold font-heading">
              Login to your account
            </h1>
            <p className="text-sm text-balance text-muted-foreground">
              Enter your API key below to login to your account
            </p>
          </div>
          <Field>
            <div className="flex items-center">
              <FieldLabel htmlFor="api-key">API Key</FieldLabel>
              <a
                href="https://www.torn.com/preferences.php#tab=api"
                className="ml-auto text-sm underline-offset-4 hover:underline"
              >
                Don't know your API key?
              </a>
            </div>
            <Input
              name="api-key"
              required
              defaultValue={apikey}
              placeholder="sU003eyNxaBn8Yq3"
            />
          </Field>
          <Field>
            <Button type="submit" disabled={loading}>
              Login
            </Button>
          </Field>
          <FieldDescription>
            Your API key is stored securely in a cookie and is used to
            authenticate your requests to the Torn API. We do not store your API
            key on our servers.
          </FieldDescription>
          <FieldDescription>
            We need a Full Access API key to be able to query all the data from
            the API and provide you with the best experience.
          </FieldDescription>
          <FieldSeparator />
          <Field>
            <FieldLabel htmlFor="api-key">Data queried from the API</FieldLabel>
            <FieldDescription>
              All data which is queried from the API with your API Key is stored
              in your browser (IndexedDB). {
                " "
              }
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more
              </a>
            </FieldDescription>
          </Field>
        </FieldGroup>
      </form>
    );
        }