"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldDescription, FieldGroup } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { saveCookie } from "@/lib/cookies";
import {
  InputGroup,
  InputGroupButton,
  InputGroupInput,
} from "../ui/input-group";
import { isSuccess } from "@/lib/api/errors/errors";
import { deleteCookie, checkCookieExists } from "@/lib/cookies";
import getKeyInfo, { checkAPIKey } from "@/lib/api/key/info";
import { toast } from "sonner";

export default function APICard({ cookieapiKey }: { cookieapiKey: string }) {
  const [apikey, setApikey] = useState(cookieapiKey);
      const [loading, setLoading] = useState(false);
      const [success, setSuccess] = useState(false);

    async function handleSave() {
        setLoading(true);

      const response = await getKeyInfo();

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
        toast.success("Successfully saved API key!");
      } else {
        deleteCookie("tornly:apikey");
        toast.error("Invalid API Key. Please try again.");
        setSuccess(false);
        setLoading(false);
      }
    }

  return (
    <Card className="flex-1">
      <CardContent>
        <Field>
          <Label htmlFor="requestLimit">API Key</Label>
          <FieldDescription className="mb-4">
            Your API key is used to authenticate requests to the API. Keep it
            secret!
          </FieldDescription>
          <FieldGroup>
            <InputGroup>
              <InputGroupInput
                value={apikey}
                onChange={(e) => setApikey(e.target.value)}
              />
              <InputGroupButton
                onClick={handleSave}
              >
                Save
              </InputGroupButton>
            </InputGroup>
          </FieldGroup>
        </Field>
      </CardContent>
    </Card>
  );
}
