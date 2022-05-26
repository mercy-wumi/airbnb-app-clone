import ExperienceCard from "./ExperienceCard"

const Main = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-16 pt-28 relative">
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
        </div>
    )
}

export default Main