function Job({ title, icon, bgColor }) {
  return (
    <div
      className={`${bgColor} flex aspect-square flex-col items-center justify-center rounded-lg p-4 text-[#ffff] `}
    >
      {icon}
      <p className="font-popi pt-2">{title}</p>
    </div>
  );
}

export default Job;
