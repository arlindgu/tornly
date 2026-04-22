"use client"

import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldDescription, FieldGroup } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider"
import { useState } from "react";
import { saveCookie } from "@/lib/cookies";

export default function SliderCard({ rpm }: { rpm: number }) {
    return (
      <Card className="flex-1">
        <CardContent>
          <Field>
            <Label htmlFor="requestLimit">Requests per Minute</Label>
            <FieldDescription className="mb-4">
              Adjust the number of API requests allowed per minute. Max Rate is
              100 RPM.
            </FieldDescription>
            <FieldGroup className="flex flex-row">
              <Slider
                step={5}
                min={5}
                max={100}
                defaultValue={[rpm]}
                onValueChange={(value) =>
                  saveCookie("tornly:rpm", value[0].toString())
                }
              />
              <Label>{rpm}</Label>
            </FieldGroup>
          </Field>
        </CardContent>
      </Card>
    );
}