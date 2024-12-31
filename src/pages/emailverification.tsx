import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Link } from "react-router";
// import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

function EmailVerification() {
  return (
    <div>
      <div className="h-screen  flex items-center justify-center">
        <div className="w-[450px] shadow-xl">
          <Card className=" p-12">
            <div className="text-center ">
              <CardTitle className="text-3xl ">Email Verification</CardTitle>
              <p className="text-sm text-[#777E90] mt-4">
                We have send code to your Email
              </p>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center text-sm text-[#777E90] mt-6">
              <p>Enter code here</p>
              <InputOTP maxLength={6}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>
            <div className="mt-4 flex justify-center">
              <Button type="button" className="w-full">
                Send Password
              </Button>
            </div>
            <div className="flex flex-col gap-1 text-center py-4">
              <p className="text-md text-[#777E90]">
                Did't receive code?&nbsp;
                <Link
                  className="text-primary hover:underline  transition"
                  to="/signin"
                >
                  Resend
                </Link>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default EmailVerification;
