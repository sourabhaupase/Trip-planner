import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router";

function Signup() {
  return (
    <div className="h-screen  flex items-center justify-center">
      <div className="w-[450px] shadow-xl">
        <Card className=" p-12">
          <div className="flex flex-col gap-4">
            <div className="text-center">
              <CardTitle className="text-3xl">Get's Started.</CardTitle>
              <p className="text-lg text-[#777E90]">
                Alerady have an account?{" "}
                <Link
                  className="text-primary hover:underline  transition"
                  to="/signin"
                >
                  Sign In
                </Link>
              </p>
            </div>
            <div>
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
            </div>
            <div>
              <form action="" className="flex flex-col gap-2">
                <div>
                  <Label className="mb-1 inline-block" htmlFor="">
                    First Name
                  </Label>
                  <Input placeholder="First Name" />
                </div>
                <div>
                  <Label className="mb-1 inline-block" htmlFor="">
                    Last Name
                  </Label>
                  <Input placeholder="Last Name" />
                </div>
                <div>
                  <Label className="mb-1 inline-block" htmlFor="">
                    Email
                  </Label>
                  <Input placeholder="Email" />
                </div>
                <div>
                  <Label className="mb-1 inline-block" htmlFor="">
                    Password
                  </Label>
                  <Input type="password" placeholder="Password" />
                </div>

                <div className="mt-2">
                  <Button className="w-full">sign up</Button>
                </div>
              </form>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Signup;
