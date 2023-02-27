import { Experiences } from "typings";

export const fetchExperiences = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/src/pages/api/getExperiences`)

    const data = await res.json()
    const experiences: Experiences[] = data.experiences

    //console.log("fetching", experiences)

    return experiences
}