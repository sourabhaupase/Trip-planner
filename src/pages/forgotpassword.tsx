import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Mail, PhoneCall } from "lucide-react";
import { Link } from "react-router";

function ForgotPassword() {
  return (
    <div className="h-screen  flex items-center justify-center">
      <div className="w-[450px] shadow-xl">
        {/* <div>Forgotpassword</div> */}

        <Card className=" p-12">
          <div className="text-center ">
            <CardTitle className="text-3xl ">Forgot Password</CardTitle>
            <p className="text-sm text-[#777E90] mt-2">
              Please Select option to send link reset password
            </p>
          </div>
          <div className="space-y-3 mt-3">
            <div className="md:flex justify-between items-center gap-4 border p-3 px-5 rounded-md cursor-pointer">
              <div className="h-10 w-10 min-w-10 min-h-10 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center">
                <Mail />
              </div>
              <div>
                <h4 className="text-md font-medium text-[#23262F]">
                  Reset via Email
                </h4>
                <p className="text-sm font-normal text-[#B1B5C3]">
                  Link reset will be sent to your email address registered
                </p>
              </div>
            </div>
            <div className="md:flex justify-between items-center gap-4 border p-3 px-5 rounded-md cursor-pointer">
              <div className="h-10 w-10 min-w-10 min-h-10 rounded-full bg-gray-200 flex items-center justify-center">
                <PhoneCall />
              </div>
              <div>
                <h4 className="text-md font-medium text-[#23262F]">
                  Reset via SMS
                </h4>
                <p className="text-sm font-normal text-[#B1B5C3]">
                  Link reset will be sent to your mobile number
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            {/* <Button
              type="button"
              onClick="./emailverification"
              className="w-full"
            > */}
            <Button asChild className="w-full">
              <Link className="block w-full" to="/emailverification">
                Send Password
              </Link>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default ForgotPassword;
