import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { useState } from "react";

function SignIn() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    console.log(email, password);
  };

  return (
    <div className="md:flex justify-center h-screen items-center p-2 md:p-0">
      <div>
        <Card className="md:w-[450px] shadow-xl ">
          <CardHeader className="items-center">
            <CardTitle className="text-3xl">Get's Started.</CardTitle>
            <CardDescription className="text-lg text-[#777E90]">
              Don't have an account?{" "}
              <a className="text-primary" href="">
                Sign up.
              </a>
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="flex justify-between gap-2">
              <Button className="flex-1" variant="outline">
                <Facebook />
              </Button>
              <Button className="flex-1" variant="outline">
                <Twitter />
              </Button>
              <Button className="flex-1" variant="outline">
                <Instagram />
              </Button>
            </div>

            <div className="flex justify-center items-center my-4">
              <p>or login in with email</p>
            </div>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label className="mb-1" htmlFor="email">
                    Email
                  </Label>
                  <Input
                    id="name"
                    placeholder="Email Address"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label className="mb-1" htmlFor="password">
                    Password
                  </Label>
                  <Input
                    type="password"
                    id="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
                <div className="md:flex justify-between">
                  <Label className="flex items-center gap-1 cursor-pointer font-normal text-sm">
                    <Checkbox />
                    <span>Remember me</span>
                  </Label>
                  <a href="" className="text-sm">
                    Forgot your password
                  </a>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button onClick={handleSignIn} className="w-full">
              sign in
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export function CardWithForm() {}

export default SignIn;
