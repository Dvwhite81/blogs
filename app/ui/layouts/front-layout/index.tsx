import { ReactNode } from 'react';

export default function FrontLayout({ children }: { children: ReactNode }) {
  return (
    <div className=" h-screen w-screen">
      <div className="flex flex-row space-x-2 items-center">
        <div
          className="pl-4 w-1/2 h-screen bg-center rounded-r-xl max-md:hidden"
          style={{ backgroundImage: 'url(./assets/bg-login.jpg)' }}
        />
        <div className="w-1/2 p-16 max-md:w-full">{children}</div>
      </div>
    </div>
  );
}
