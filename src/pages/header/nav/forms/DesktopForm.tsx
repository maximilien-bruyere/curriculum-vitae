interface DesktopFormProps {
  lang: string;
  handleLangChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  t: (key: string) => string;
}

const DesktopForm: React.FC<DesktopFormProps> = (props) => {
  return (
    <>
      <form className="hidden md:block pr-10">
        <label htmlFor="under line_select" className="sr-only">
          Underline select
        </label>
        <select
          id="underline_select"
          value={props.lang}
          onChange={props.handleLangChange}
          className="hover:cursor-pointer text-[15px] block pt-2 pb-1 px-2 w-full text-gray-700 bg-transparent border-0 border-b-1 border-rust appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
        >
          <option value="FR">{props.t("french")}</option>
          <option value="EN">{props.t("english")}</option>
        </select>
      </form>
    </>
  );
};

export default DesktopForm;
