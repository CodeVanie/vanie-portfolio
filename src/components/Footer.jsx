
function Footer() {
    return (
        <>
            <footer className="w-full h-20 bg-black flex flex-wrap items-center justify-center px-20 bg-[url(assets/images/content-bg.jpg)] bg-center bg-no-repeat bg-cover bg-fixed border border-pink-300">
                <h4 className="text-white text-center text-[15px]">Copyright © {new Date().getFullYear()} CodeVANIE. All rights reserved.</h4>
            </footer>
        </>
    )
}

export default Footer