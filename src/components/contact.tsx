"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MagicCard } from "./magicui/magic-card";
import { useTheme } from "next-themes";
import { Textarea } from "./ui/textarea";
import { MapComponent } from "./map";
import { MapProvider } from "@/providers/map-provider";

const Contact = () => {
    return (
        <div className="flex flex-col md:flex-row mx-20 pt-10">
            <div className="flex flex-col md:w-[50%] mb-5 md:mb-0">
                <h1>Get In Touch</h1>
                <p>We're here to support you in Making Sustainability Happen. Get in touch for a collaborative discussion about what that could look like for your organisation.</p>
                <div className="rounded pt-10">
                  <MapProvider>
                    <MapComponent />
                  </MapProvider>
                </div>
            </div>
            <div className="flex md:w-[50%] justify-center items-center">
                <ContactCard />
            </div>
        </div>
    )
}


const ContactCard = () => {
  const { theme } = useTheme();
  return (
    <Card>
      <MagicCard gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}>
        <CardHeader>
          <CardTitle>Send Your Message</CardTitle>
          <CardDescription>
            Fill in the below form and we'll get you to the right place.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Name</Label>
                <Input id="name" type="text" placeholder="joe" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="name@example.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Company</Label>
                <Input id="company" type="text"  placeholder="ASM Inc."/>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Region</Label>
                <Input id="region" placeholder="Casablanaca" type="text"  />
              </div>

              <div className="grid gap-2">
                <Textarea placeholder="Type your message here." />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Submit</Button>
        </CardFooter>
      </MagicCard>
    </Card>
  );
}

export default Contact;