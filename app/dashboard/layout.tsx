import SideNav from "@/app/ui/dashboard/SideNav";

export default function Layout({children}: {children: React.ReactNode}){
    return(
        <>
        <div >
        <SideNav data={children} />
        {/* <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div> */}
        </div>
        </>
    )
}