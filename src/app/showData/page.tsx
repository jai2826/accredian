import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

async function getAllEnquiries() {
  const dataDir = path.join(process.cwd(), "data");

  if (!fs.existsSync(dataDir)) return [];

  try {
    const files = fs.readdirSync(dataDir);

    const allData = files
      .filter((file) => file.endsWith(".json"))
      .map((file) => {
        const filePath = path.join(dataDir, file);
        const fileContent = fs.readFileSync(
          filePath,
          "utf8",
        );
        const parsed = JSON.parse(fileContent);

        const stats = fs.statSync(filePath);

        return {
          ...parsed,
          id: file,
          createdAt: stats.birthtime.toISOString(),
        };
      });

    return allData.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() -
        new Date(a.createdAt).getTime(),
    );
  } catch (error) {
    console.error("Error reading data folder:", error);
    return [];
  }
}

export default async function AdminDashboard() {
  const enquiries = await getAllEnquiries();

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-10 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Incoming Leads
            </h1>
          </div>
          <div className="flex gap-3">
            <div className="bg-white border px-4 py-2 rounded-lg shadow-sm">
              <span className="text-xs text-slate-400 block uppercase font-bold">
                Total
              </span>
              <span className="text-xl font-bold text-blue-600">
                {enquiries.length}
              </span>
            </div>
          </div>
        </header>

        {enquiries.length === 0 ? (
          <div className="bg-white border-2 border-dashed rounded-3xl py-20 text-center">
            <p className="text-slate-400">
              The 'data' folder is empty. No JSON files
              found.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {enquiries.map((data, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm hover:border-blue-300 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 font-bold shrink-0">
                    {data.name?.charAt(0) || "U"}
                  </div>
                  <div>
                    <h2 className="font-bold text-slate-900">
                      {data.name}
                    </h2>
                    <p className="text-sm text-slate-500">
                      {data.email}
                    </p>
                    <div className="flex gap-2 mt-1">
                      <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded text-slate-600 font-bold uppercase">
                        {data.domain}
                      </span>
                      <span className="text-[10px] bg-green-50 px-2 py-0.5 rounded text-green-700 font-bold uppercase">
                        {data.modeOfDelivery}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:flex items-center gap-8 border-t md:border-t-0 pt-4 md:pt-0">
                  <div className="text-center md:text-left">
                    <span className="text-[10px] text-slate-400 uppercase font-bold">
                      Company
                    </span>
                    <p className="text-sm font-medium text-slate-700">
                      {data.companyName}
                    </p>
                  </div>
                  <div className="text-center md:text-left">
                    <span className="text-[10px] text-slate-400 uppercase font-bold">
                      Candidates
                    </span>
                    <p className="text-sm font-medium text-slate-700">
                      {data.candidateCount}
                    </p>
                  </div>
                  <div className="text-center md:text-left hidden lg:block">
                    <span className="text-[10px] text-slate-400 uppercase font-bold">
                      Date
                    </span>
                    <p className="text-sm font-medium text-slate-700">
                      {new Date(
                        data.createdAt,
                      ).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
