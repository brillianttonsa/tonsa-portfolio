const ProfileImage = () => (
  <div className="relative mb-12">
    <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-8 border-slate-800 shadow-[0_0_50px_rgba(252,224,71,0.2)] relative z-10">
      <img
        src="/my-photo.jpg"
        alt="Developer Profile"
        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
      />
    </div>
    <div className="absolute -inset-4 border-2 border-dashed border-[#fde047]/30 rounded-full animate-[spin_15s_linear_infinite]" />
  </div>
);

export default ProfileImage;
