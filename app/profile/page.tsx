import Image from 'next/image';

export default function ProfilePage() {
  return (
    <div className="flex justify-center">
      <div className="card card-side bg-primary-content shadow-xl w-[50%]">
        <figure>
          <Image
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">My Profile</h2>
          <p>Valerian Dwi Purnomo</p>
        </div>
      </div>
    </div>
  );
}
