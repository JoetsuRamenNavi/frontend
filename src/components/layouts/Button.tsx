import { NextPage } from "next";

type props = {
    text : string;
}

const ButtonLayout: NextPage<props> = ({text}) => {
    return (
        <div className="">
          <input
            type="submit"
            value={text}
            className="bg-[#000] w-full text-white rounded text-[18px] py-3 text-center"
          />
        </div>
    );
}

export default ButtonLayout;