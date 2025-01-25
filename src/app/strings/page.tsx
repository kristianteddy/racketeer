import {getRacketStrings} from "@/src/services/string-service";
import {StringCardComponent} from "@/src/app/strings/_components/string-card.component";

export default async function Home() {
    const rackets = await getRacketStrings();
    return (

            <ul className="grid w-ful justify-items-center grid-cols-1 p-4 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {rackets.map((racketString, index) => (
                    <li key={index}>
                        <StringCardComponent string={racketString} />
                    </li>
                ))}
            </ul>

    );
}
