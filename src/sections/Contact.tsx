import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import MagicButton from "@/components/MagicButton";

export const ContactSection = () => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-400 to-emerald-200 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-bold text-2xl md:text-3xl">Let's Connect</h2>
              <p className="text-sm md:text-base mt-2">
                Have an open role you think I would be a great fit for? Or just
                want to chat? Please don't hesitate to reach out!
              </p>
            </div>
            <div>
              <MagicButton
                title="Contact Me"
                icon={<ArrowUpRightIcon className="size-4" />}
                position="right"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
