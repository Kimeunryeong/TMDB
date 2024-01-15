export default function CircularProgress({ rate }) {
  let color;
  switch (true) {
    case parseInt(rate) >= 70:
      color = "#2da94c";
      break;
    case parseInt(rate) >= 50 && rate < 70:
      color = "#90972c";
      break;
    case parseInt(rate) < 50:
      color = "#974c2c";
      break;
    default:
      break;
  }
  return (
    <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-red-200 relative">
      <div
        className="w-[36px] h-[36px] flex justify-center items-center rounded-full "
        style={{
          background: `conic-gradient(${color} 0% ${
            360 * rate * 0.01
          }deg, rgba(255, 255, 255, 0.1) ${360 * rate * 0.01}deg360deg)`,
        }}
      >
        <div className="w-[32px] h-[32px] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex justify-center text-[12px] text-white">
          {rate}<sup>%</sup>
        </div>
      </div>
    </div>
  );
}
