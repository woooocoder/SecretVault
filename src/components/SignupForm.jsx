const SignupForm = () => {
  return (
    <div class="relative flex flex-col items-center justify-center h-screen overflow-hidden">
      <div class="w-full p-6 bg-white border-t-4 border-primary rounded-md shadow-md border-top lg:max-w-lg">
        <h1 class="text-3xl font-semibold text-center text-gray-700">
          Sign Up
        </h1>
        <form class="space-y-4">
          <div className="md:flex justify-between">
            <div>
              <label class="label">
                <span class="text-base label-text text-secondary">First Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter First Name"
                class="w-full input input-bordered shadow-xl bg-inherit text-base-300"
              />
            </div>
            <div>
              <label class="label">
                <span class="text-base label-text text-secondary">Last Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter Last Name"
                class="w-full input input-bordered shadow-xl bg-inherit text-base-300"
              />
            </div>
          </div>
          <div>
            <label class="label">
              <span class="text-base label-text text-secondary">Email</span>
            </label>
            <input
              type="text"
              placeholder="Email Address"
              class="w-full input input-bordered shadow-xl bg-inherit text-base-300"
            />
          </div>
          <div>
            <label class="label">
              <span class="text-base label-text text-secondary">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              class="w-full input input-bordered shadow-xl bg-inherit text-base-300"
            />
          </div>

          <div>
            <label class="label">
              <span class="text-base label-text text-secondary">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              class="w-full input input-bordered shadow-xl bg-inherit text-base-300"
            />
          </div> 

          <div className="pt-[8%]">
            <button class="btn btn-block btn-neutral shadow-xl">Sign Up</button>
          </div>

          <div>
            <a className="hover:text-neutral" href="/login">
              Have An Account? Login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
