 // Optional: npm install date-fns for cleaner dates

import supabase from "@/utils/supabase/server";

// Ensure the page is never cached so new leads appear on refresh
export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  

  // 1. Fetch all data from Supabase
  const { data: enquiries, error } = await supabase
    .from("Enquiries")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Supabase Error:", error.message);
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-10 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Incoming Leads</h1>
            <p className="text-slate-500 text-sm">Cloud-synced data from Supabase.</p>
          </div>
          <div className="flex gap-3">
            <div className="bg-white border px-4 py-2 rounded-lg shadow-sm">
              <span className="text-xs text-slate-400 block uppercase font-bold">Total</span>
              <span className="text-xl font-bold text-blue-600">
                {enquiries?.length || 0}
              </span>
            </div>
          </div>
        </header>

        {!enquiries || enquiries.length === 0 ? (
          <div className="bg-white border-2 border-dashed rounded-3xl py-20 text-center">
            <p className="text-slate-400">No leads found in the database yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {enquiries.map((data:any) => (
              <div
                key={data.id}
                className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm hover:border-blue-300 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 font-bold shrink-0 text-lg uppercase">
                    {data.name?.charAt(0) || "U"}
                  </div>
                  <div>
                    <h2 className="font-bold text-slate-900">{data.name}</h2>
                    <p className="text-sm text-slate-500">{data.email}</p>
                    <div className="flex gap-2 mt-1">
                      <span className="text-[10px] bg-blue-50 px-2 py-0.5 rounded text-blue-700 font-bold uppercase">
                        {data.domain}
                      </span>
                      <span className="text-[10px] bg-green-50 px-2 py-0.5 rounded text-green-700 font-bold uppercase">
                        {data.delivery_mode}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:flex items-center gap-8 border-t md:border-t-0 pt-4 md:pt-0">
                  <div className="text-center md:text-left">
                    <span className="text-[10px] text-slate-400 uppercase font-bold">Company</span>
                    <p className="text-sm font-medium text-slate-700">{data.company_name}</p>
                  </div>
                  <div className="text-center md:text-left">
                    <span className="text-[10px] text-slate-400 uppercase font-bold">Candidates</span>
                    <p className="text-sm font-medium text-slate-700">{data.candidates}</p>
                  </div>
                  <div className="text-center md:text-left hidden lg:block">
                    <span className="text-[10px] text-slate-400 uppercase font-bold">Location</span>
                    <p className="text-sm font-medium text-slate-700 truncate max-w-[120px]">
                      {data.location}
                    </p>
                  </div>
                  <div className="text-center md:text-left hidden lg:block">
                    <span className="text-[10px] text-slate-400 uppercase font-bold">Date</span>
                    <p className="text-sm font-medium text-slate-700 truncate max-w-[120px]">
                      {new Date(data.created_at).toLocaleDateString()}
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