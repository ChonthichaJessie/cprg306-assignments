const { default: NewItem } = require("./new-item")

const Page = () => {
    return(
        <main class="bg-slate-950 flex justify-center w-full">
            <NewItem/>
        </main>
        
    )
}
export default Page