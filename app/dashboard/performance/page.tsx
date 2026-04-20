import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from "@/components/ui/input-group";

export default function PerformancePage() {
    return (
      <div className="p-6 md:p-10 flex flex-col gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Performance</h1>
          <p className="text-sm text-muted-foreground">
            Here you can adjust how your performance gets measured.
          </p>
        </div>
        <section className="flex">
          <Card>
            <CardHeader>
              <CardTitle>Performance Settings</CardTitle>
              <CardDescription>
                Here you can adjust how your performance gets measured.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Field>
                <FieldLabel htmlFor="performance-metric">Sleep</FieldLabel>
                <FieldDescription>
                  How long you usually sleep per day. This is used to calculate
                  your performance based on how well you sleep.
                </FieldDescription>
                <InputGroup>
                  <InputGroupInput
                    name="hours"
                    placeholder="8"
                    defaultValue={8}
                  />
                  <InputGroupAddon></InputGroupAddon>
                  <InputGroupAddon align="inline-end">
                    <InputGroupText>hours</InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </Field>
            </CardContent>
          </Card>
        </section>
      </div>
    );
    }