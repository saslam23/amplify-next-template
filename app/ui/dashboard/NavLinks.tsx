'use client';
import Link from 'next/link';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FolderIcon from '@mui/icons-material/Folder';
import {usePathname} from 'next/navigation';
import Face2Icon from '@mui/icons-material/Face2';
import AddCardIcon from '@mui/icons-material/AddCard';
import clsx from 'clsx';


const icons={
  dashboardIcon: <DashboardIcon/>,
  folderIcon: <FolderIcon/>,
  addCardIcon:<AddCardIcon/>,
  face2Icon:<Face2Icon/>
}



const links = [
    { name: 'Overview', href: '/dashboard', icon:"dashboardIcon" },
    {
      name: 'Invoices',
      href: '/dashboard/invoices',
      icon:'addCardIcon'

      
    },
    { name: 'Documents', href: '/dashboard/documents', icon:'folderIcon'},
    { name: 'Human Resources', href: '/dashboard/hr', icon:'face2Icon'},
  ];
  

export default function NavLinks(){
    const pathname = usePathname();

    return(
        <>
           {links.map((link) => {
         const Icon = icons[link.icon as keyof typeof icons]
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx("flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
            ,{'bg-lightBlue':pathname === link.href}
              )}
          >
           <div className="w-6">{Icon ? Icon:null}</div>
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
        </>
    )
}