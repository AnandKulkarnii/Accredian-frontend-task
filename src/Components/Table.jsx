function Table() {
  const programs = [
    {
      name: " Professional Certificate Program in Product Management",
      referrerBonus: "₹ 7,000",
      refereeBonus: "₹ 9,000",
    },
    {
      name: " PG Certificate Program in Strategic Product Management",
      referrerBonus: "₹ 9,000",
      refereeBonus: "₹ 11,000",
    },
    {
      name: " Executive Program in Data Driven Product Management",
      referrerBonus: "₹ 10,000",
      refereeBonus: "₹ 10,000",
    },
    {
      name: " Executive Program in Product Management and Digital Transformation",
      referrerBonus: "₹ 10,000",
      refereeBonus: "₹ 10,000",
    },
    {
      name: " Executive Program in Product Management",
      referrerBonus: "₹ 10,000",
      refereeBonus: "₹ 10,000",
    },
    {
      name: " Advanced Certification in Product Management",
      referrerBonus: "₹ 10,000",
      refereeBonus: "₹ 10,000",
    },
    {
      name: " Executive Program in Product Management and Project Management",
      referrerBonus: "₹ 10,000",
      refereeBonus: "₹ 10,000",
    },
  ];
  return (
    <div className="w-[979px] h-[503px] container mx-auto px-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-lg rounded-lg">
          <thead>
            <tr>
              <th className="py-4 px-6 bg-[rgba(26,115,235,0.35)] text-left text-[#1350A0] font-source-sans-pro text-xl font-bold leading-6 rounded-tl-lg">
                Programs
              </th>
              <th className="py-4 px-6 bg-[rgba(26,115,235,0.35)] text-left text-[#1350A0] font-source-sans-pro leading-6 text-xl font-bold">
                Referrer Bonus
              </th>
              <th className="py-4 px-6 bg-[rgba(26,115,235,0.35)] text-left text-[#1350A0]  font-source-sans-pro text-xl font-bold leading-6 rounded-tr-lg">
                Referee Bonus
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300">
            {programs.map((program, index) => (
              <tr className="" key={index}>
                <td className="py-4 px-6 text-gray-700 flex items-center">
                  <img
                    className="w-[24.05px] h-[18px]"
                    src="/assets/hat.png"
                    alt=""
                  />
                  {program.name}
                </td>
                <td className="py-4 px-6 text-gray-700">
                  {program.referrerBonus}
                </td>
                <td className="py-4 px-6 text-gray-700">
                  {program.refereeBonus}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
