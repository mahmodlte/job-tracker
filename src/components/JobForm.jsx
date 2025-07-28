import { useForm } from "react-hook-form";
import InputField from "./InputField";
import SelectField from "./SelectField";
const JobForm = () => {
  const { register, handleSubmit } = useForm();
  const workLocationOptions = ["Remote", "Hybrid", "On-Site"];
  const statusOptions = [
    "Applied",
    "Interviewing",
    "Rejected",
    "Offer",
    "Ghosted",
  ];
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col  justify-center">
        <InputField
          label="Role"
          type="text"
          name={"role"}
          register={register}
          required={true}
          placeholder="Enter Job Title"
        />
        <InputField
          label="Company"
          type="text"
          name="company-name"
          placeholder="Enter Company Name"
          register={register}
          required={true}
        />{" "}
        <SelectField
          label={"Application Status"}
          name={"status"}
          register={register}
          required={true}
          options={statusOptions}
        />
        <InputField
          label="Date Applied"
          type="date"
          name="date-applied"
          register={register}
          required={true}
        />
        <InputField
          label="Job Posting Link"
          type="text"
          name="job-link"
          placeholder="Link to the job post"
          register={register}
          required={true}
        />
        <SelectField
          name={"location"}
          label={"Role Location"}
          register={register}
          required={true}
          options={workLocationOptions}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default JobForm;
