interface MobileFormProps {
  lang: string;
  handleLangChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  t: (key: string) => string;
}

const MobileForm: React.FC<MobileFormProps> = (props) => {
  return (
    <>
      <form>
        <label htmlFor="under_line_select_mobile" className="sr-only">
          Underline select
        </label>
        <select
          id="under_line_select_mobile"
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

export default MobileForm;
