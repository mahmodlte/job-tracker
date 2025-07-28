import { useForm } from "react-hook-form";
import InputField from "./InputField";
const JobForm = () => {
  const { register, handleSubmit } = useForm();
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
        />
        <select {...register("status", { required: true })}>
          <option value="applied">Applied</option>
          <option value="interview">Interview</option>
          <option value="rejected">Rejected</option>
          <option value="offer">Offer</option>
          <option value="ghosted">Ghosted</option>
        </select>
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
        <select {...register("location", { required: true })}>
          <option value="remote">Remote</option>
          <option value="hybrid">Hybrid</option>
          <option value="onsite">On-Site</option>
        </select>
        <input type="submit" />
      </form>
    </div>
  );
};

export default JobForm;
