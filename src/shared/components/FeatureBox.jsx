
export default function FeatureBox({ children }) {
    
    return (
        <div className="flex-1 px-1 basis-auto ring-1 ring-purple-400 text-ptlpink rounded-lg flex justify-center bg-ptlpink/20 gap-x-1 hvr-icon-pulse hvr-radial-out select-none  items-center h-5 max-w-[130px]">
            {children}
        </div>
    )
}