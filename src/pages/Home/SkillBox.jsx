
export default function SkillBox({ children }) {
    return (
        <div className="px-3 py-2 ring-2 ring-purple-400 text-ptlpink rounded-lg flex bg-ptlpink/20 gap-x-3 hvr-icon-pulse hvr-radial-out select-none">
            {children}
        </div>
    )
}