import { TextAnimate } from "@/components/magicui/text-animate";
import { AuroraText } from "@/components/magicui/aurora-text";
import { List } from "@/components/custom/landing/List";
import GradientButton from "@/components/custom/landing/GradientButton";
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
            Spend, save and manage your money, all in one place. Open a full
            bank account from your phone, for free.
          </TextAnimate>
          <div className="flex items-center justify-start">
            <GradientButton className="scale-80" link="/login" icon="✨">
              Get Started Now
            </GradientButton>
          </div>
        </div>
        <div>
          <List className="scale-80" />
        </div>
      </div>
    </>
  );
};

export default Content;
