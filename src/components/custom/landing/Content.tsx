import { TextAnimate } from "@/components/magicui/text-animate";
import { AuroraText } from "@/components/magicui/aurora-text";
import { HandCoins } from "lucide-react";
const Content = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 items-center justify-center">
        <div className="flex flex-col gap-4 p-8">
          <AuroraText className="text-6xl font-bold capitalize">
            Your Money,
            <br />
            Your way
          </AuroraText>
          <TextAnimate className="text-base text-gray-600">
            Spend, save and manage your money, all in one place. Open a full bank account from your phone, for free.
          </TextAnimate>
        </div>
        <div>hello</div>
      </div>
    </>
  );
};

export default Content;
