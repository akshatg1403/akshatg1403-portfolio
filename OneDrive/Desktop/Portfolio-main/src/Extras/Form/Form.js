import { useForm, ValidationError } from "@formspree/react"

export default function Form(){
    const [state, handleSubmit] = useForm("myyrgzww");
    if (state.succeeded) {
        return <div>Thank you for contacting!</div>;
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col w-full bg-gray-100 p-2 rounded-md 
        gap-3 laptop:p-4 laptop:gap-4 laptop:w-[25rem] border dark:bg-[#393E46] dark:border-none
        sm:w-full">
            <label>
                <p className="text-lg laptop:text-xl">
                    Name:
                </p>
                <input id="name" type="text" name="name" className="outline-none w-full text-lg laptop:text-xl 
                dark:bg-[#222831]"/>
                <ValidationError 
                prefix="Name" 
                field="name"
                errors={state.errors}
                />
            </label>
            <label>
                <p className="text-lg laptop:text-xl">
                    Email:
                </p>
                <input id="email" type="email" name="email" className="outline-none w-full text-lg laptop:text-xl 
                dark:bg-[#222831]"/>
                <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
                />
            </label>
            
            <label>
                <p className="text-lg laptop:text-xl">
                    Message:
                </p>
                <textarea id="message" name="message" className="outline-none w-full text-lg laptop:text-xl 
                dark:bg-[#222831]"/>
                <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
                />
            </label>
            
            

            <button type="submit" disabled={state.submitting} className="bg-blue-500 w-fit px-3 py-2
            rounded-md text-white text-lg">
                Submit
            </button>
        </form>
    )
}