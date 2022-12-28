<Form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
    <Field name="firstName"
        type="text"
        placeholder="Input your first name"
        className="border-[1px] border-solid border-neutral bg-white w-[100%] pl-3 h-[50px] rounded-[4px]"
        onChange={formik.handleChange}
        value={formik.values.firstName} />
    <ErrorMessage name="firstName" component="div" />
    <Field name="lastName"
        type="text"
        placeholder="Input your last name"
        className="border-[1px] border-solid border-neutral bg-white w-[100%] pl-3 h-[50px] rounded-[4px]"
        onChange={formik.handleChange}
        value={formik.values.lastName} />
    <ErrorMessage name="lastName" component="div" />

    <Field
        name="email"
        type="email"
        placeholder="Input your email"
        className="border-[1px] border-solid border-neutral bg-white w-[100%] pl-3 h-[50px] rounded-[4px]"
        onChange={formik.handleChange}
        value={formik.values.email}
    />
    <ErrorMessage name="email" component="div" />

    <div className="mb-5 relative">
        <Field
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Input your password"
            className="border-[1px] border-solid border-neutral bg-white w-[100%] pl-3 h-[50px] rounded-[4px]"
            onChange={formik.handleChange}
            value={formik.values.password}
        />
        {showPassword ? (
            <Icon
                className="absolute top-[10px] right-4 w-[30px] h-auto"
                icon="mdi:eye"
                onClick={() => setShowPassword(!showPassword)}
            />
        ) : (
            <Icon
                className="absolute top-[10px] right-4 w-[30px] h-auto"
                icon="mdi:eye-off"
                onClick={() => setShowPassword(!showPassword)}
            />
        )}
        <ErrorMessage name="password" component="div" />
    </div>
    <div className="mb-5">
        <button
            className="border-[1px] border-solid border-[#82C3EC] bg-[#82C3EC] w-[100%] pl-3 h-[50px] rounded-[4px] text-white"
            type="submit"
            disabled={formik.isSubmitting}
        >
            Submit
        </button>
    </div>
</Form>