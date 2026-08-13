import {
  Activity,
  ArrowLeft,
  BedDouble,
  CalendarDays,
  ClipboardList,
  CreditCard,
  HeartPulse,
  Mail,
  MapPin,
  Phone,
  Pill,
  ShieldAlert,
  Stethoscope,
  UserRound,
} from "lucide-react";

import { Link, useParams } from "react-router-dom";

const patientRecords = {
  "P-1001": {
    id: "P-1001",
    name: "Rahul Menon",
    initials: "RM",
    age: 45,
    gender: "Male",
    bloodGroup: "O+",
    phone: "+91 98765 43210",
    email: "rahul.menon@email.com",
    location: "Coimbatore, Tamil Nadu",
    department: "Cardiology",
    doctor: "Dr. Priya Raman",
    status: "Admitted",
    priority: "High",
    admissionDate: "10 Aug 2026",
    bed: "CCU-04",
    diagnosis: "Acute chest pain with hypertension",
    insurance: "Star Health Insurance",
    emergencyContact: "Lakshmi Menon - +91 98765 44882",
  },

  "P-1002": {
    id: "P-1002",
    name: "Anjali Rao",
    initials: "AR",
    age: 32,
    gender: "Female",
    bloodGroup: "B+",
    phone: "+91 98231 22345",
    email: "anjali.rao@email.com",
    location: "Chennai, Tamil Nadu",
    department: "General Medicine",
    doctor: "Dr. Karthik S",
    status: "OPD",
    priority: "Normal",
    admissionDate: "12 Aug 2026",
    bed: "Not Assigned",
    diagnosis: "Viral fever and dehydration",
    insurance: "Self Pay",
    emergencyContact: "Ravi Rao - +91 98700 33122",
  },

  "P-1003": {
    id: "P-1003",
    name: "Karthik S",
    initials: "KS",
    age: 28,
    gender: "Male",
    bloodGroup: "A+",
    phone: "+91 90030 44112",
    email: "karthik.s@email.com",
    location: "Erode, Tamil Nadu",
    department: "Orthopedics",
    doctor: "Dr. Arun Kumar",
    status: "Discharged",
    priority: "Normal",
    admissionDate: "08 Aug 2026",
    bed: "WARD-A-14",
    diagnosis: "Minor ligament injury",
    insurance: "HDFC ERGO",
    emergencyContact: "Suresh Kumar - +91 90030 55443",
  },
};

const medications = [
  {
    medicine: "Aspirin",
    dosage: "75 mg",
    frequency: "Once daily",
    duration: "7 days",
  },
  {
    medicine: "Atorvastatin",
    dosage: "10 mg",
    frequency: "Night",
    duration: "30 days",
  },
  {
    medicine: "Pantoprazole",
    dosage: "40 mg",
    frequency: "Before breakfast",
    duration: "7 days",
  },
];

const recentVisits = [
  {
    date: "12 Aug 2026",
    department: "Cardiology",
    doctor: "Dr. Priya Raman",
    type: "Ward Review",
    status: "Completed",
  },
  {
    date: "11 Aug 2026",
    department: "Cardiology",
    doctor: "Dr. Priya Raman",
    type: "Clinical Review",
    status: "Completed",
  },
  {
    date: "10 Aug 2026",
    department: "Emergency",
    doctor: "Dr. Sanjay Rao",
    type: "Emergency Admission",
    status: "Completed",
  },
];

function PatientDetails() {
  const { id } = useParams();

  const patient =
    patientRecords[id] || patientRecords["P-1001"];

  const priorityStyle = {
    High: "bg-orange-50 text-orange-600",
    Normal: "bg-emerald-50 text-emerald-600",
    Critical: "bg-red-50 text-red-600",
  };

  const statusStyle = {
    Admitted: "bg-blue-50 text-blue-600",
    OPD: "bg-emerald-50 text-emerald-600",
    Discharged: "bg-slate-100 text-slate-500",
  };

  return (
    <div className="mx-auto max-w-[1600px]">
      {/* BACK + HEADER */}
      <div className="mb-6">
        <Link
          to="/patients"
          className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-[#149883]"
        >
          <ArrowLeft size={17} />
          Back to Patients
        </Link>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-medium text-[#149883]">
              Patient Clinical Record
            </p>

            <h1 className="mt-1 text-2xl font-semibold tracking-tight text-[#173b3f] sm:text-3xl">
              Patient Details
            </h1>

            <p className="mt-2 text-sm text-slate-400">
              Review clinical, admission and billing information.
            </p>
          </div>

          <button
            type="button"
            className="rounded-xl bg-[#149883] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#107b6d]"
          >
            Edit Patient
          </button>
        </div>
      </div>

      {/* PATIENT HERO */}
      <section className="relative overflow-hidden rounded-[26px] bg-[#123f3b] p-6 text-white sm:p-8">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />

        <div className="absolute right-20 top-16 h-32 w-32 rounded-full border border-white/10" />

        <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="grid h-24 w-24 place-items-center rounded-[26px] border-4 border-white/15 bg-[#dff6f1] text-2xl font-semibold text-[#149883]">
              {patient.initials}
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-2xl font-semibold">
                  {patient.name}
                </h2>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    statusStyle[patient.status]
                  }`}
                >
                  {patient.status}
                </span>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    priorityStyle[patient.priority]
                  }`}
                >
                  {patient.priority} Priority
                </span>
              </div>

              <p className="mt-2 text-sm text-white/60">
                {patient.id} · {patient.age} Years · {patient.gender} ·{" "}
                {patient.bloodGroup}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs text-white/80">
                  {patient.department}
                </span>

                <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs text-white/80">
                  {patient.doctor}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <p className="text-lg font-semibold">
                {patient.bloodGroup}
              </p>
              <p className="mt-1 text-[11px] text-white/50">
                Blood Group
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <p className="text-lg font-semibold">
                {patient.bed}
              </p>
              <p className="mt-1 text-[11px] text-white/50">
                Current Bed
              </p>
            </div>

            <div className="col-span-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 sm:col-span-1">
              <p className="text-lg font-semibold">
                {patient.admissionDate}
              </p>
              <p className="mt-1 text-[11px] text-white/50">
                Admission Date
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK CLINICAL STATS */}
      <section className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-[20px] border border-[#e5eeec] bg-white p-5">
          <HeartPulse size={20} className="text-red-500" />

          <p className="mt-4 text-2xl font-semibold text-[#173b3f]">
            78 bpm
          </p>

          <p className="mt-1 text-xs text-slate-400">
            Heart Rate
          </p>
        </div>

        <div className="rounded-[20px] border border-[#e5eeec] bg-white p-5">
          <Activity size={20} className="text-blue-500" />

          <p className="mt-4 text-2xl font-semibold text-[#173b3f]">
            128/82
          </p>

          <p className="mt-1 text-xs text-slate-400">
            Blood Pressure
          </p>
        </div>

        <div className="rounded-[20px] border border-[#e5eeec] bg-white p-5">
          <ShieldAlert size={20} className="text-orange-500" />

          <p className="mt-4 text-2xl font-semibold text-[#173b3f]">
            98%
          </p>

          <p className="mt-1 text-xs text-slate-400">
            Oxygen Saturation
          </p>
        </div>

        <div className="rounded-[20px] border border-[#e5eeec] bg-white p-5">
          <Stethoscope size={20} className="text-[#149883]" />

          <p className="mt-4 text-2xl font-semibold text-[#173b3f]">
            98.4°F
          </p>

          <p className="mt-1 text-xs text-slate-400">
            Temperature
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="mt-5 grid gap-5 xl:grid-cols-[1.4fr_0.8fr]">
        {/* LEFT */}
        <div className="space-y-5">
          {/* DIAGNOSIS */}
          <section className="rounded-[22px] border border-[#e5eeec] bg-white p-6">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#edf8f6] text-[#149883]">
                <ClipboardList size={20} />
              </div>

              <div>
                <h2 className="font-semibold text-[#173b3f]">
                  Clinical Summary
                </h2>

                <p className="mt-1 text-xs text-slate-400">
                  Current diagnosis and treatment information
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-[#f8fbfa] p-5">
              <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
                Primary Diagnosis
              </p>

              <p className="mt-2 text-sm font-medium leading-6 text-[#173b3f]">
                {patient.diagnosis}
              </p>
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-slate-100 p-4">
                <p className="text-xs text-slate-400">
                  Attending Doctor
                </p>

                <p className="mt-2 text-sm font-semibold text-[#173b3f]">
                  {patient.doctor}
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  {patient.department}
                </p>
              </div>

              <div className="rounded-xl border border-slate-100 p-4">
                <p className="text-xs text-slate-400">
                  Insurance
                </p>

                <p className="mt-2 text-sm font-semibold text-[#173b3f]">
                  {patient.insurance}
                </p>

                <p className="mt-1 text-xs text-emerald-600">
                  Coverage verified
                </p>
              </div>
            </div>
          </section>

          {/* MEDICATION */}
          <section className="rounded-[22px] border border-[#e5eeec] bg-white">
            <div className="flex items-center gap-3 border-b border-slate-100 p-5">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-violet-50 text-violet-500">
                <Pill size={19} />
              </div>

              <div>
                <h2 className="font-semibold text-[#173b3f]">
                  Current Medications
                </h2>

                <p className="mt-1 text-xs text-slate-400">
                  Active prescription plan
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[650px] text-left">
                <thead>
                  <tr className="border-b border-slate-100 text-xs text-slate-400">
                    <th className="px-5 py-4 font-medium">
                      Medicine
                    </th>
                    <th className="px-5 py-4 font-medium">
                      Dosage
                    </th>
                    <th className="px-5 py-4 font-medium">
                      Frequency
                    </th>
                    <th className="px-5 py-4 font-medium">
                      Duration
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {medications.map((item) => (
                    <tr
                      key={item.medicine}
                      className="border-b border-slate-50 text-sm"
                    >
                      <td className="px-5 py-4 font-medium text-[#173b3f]">
                        {item.medicine}
                      </td>

                      <td className="px-5 py-4 text-slate-500">
                        {item.dosage}
                      </td>

                      <td className="px-5 py-4 text-slate-500">
                        {item.frequency}
                      </td>

                      <td className="px-5 py-4 text-slate-500">
                        {item.duration}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* VISIT HISTORY */}
          <section className="rounded-[22px] border border-[#e5eeec] bg-white">
            <div className="flex items-center gap-3 border-b border-slate-100 p-5">
              <CalendarDays size={19} className="text-[#149883]" />

              <div>
                <h2 className="font-semibold text-[#173b3f]">
                  Recent Visits
                </h2>

                <p className="mt-1 text-xs text-slate-400">
                  Consultation and admission history
                </p>
              </div>
            </div>

            <div className="divide-y divide-slate-100">
              {recentVisits.map((visit) => (
                <div
                  key={`${visit.date}-${visit.type}`}
                  className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="text-sm font-semibold text-[#173b3f]">
                      {visit.type}
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      {visit.department} · {visit.doctor}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-400">
                      {visit.date}
                    </span>

                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600">
                      {visit.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* RIGHT */}
        <div className="space-y-5">
          {/* CONTACT */}
          <section className="rounded-[22px] border border-[#e5eeec] bg-white p-5">
            <h2 className="font-semibold text-[#173b3f]">
              Patient Contact
            </h2>

            <p className="mt-1 text-xs text-slate-400">
              Contact and communication details
            </p>

            <div className="mt-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#edf8f6] text-[#149883]">
                  <Phone size={17} />
                </div>

                <div>
                  <p className="text-[11px] text-slate-400">
                    Phone
                  </p>

                  <p className="mt-0.5 text-sm font-medium text-[#173b3f]">
                    {patient.phone}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-blue-500">
                  <Mail size={17} />
                </div>

                <div>
                  <p className="text-[11px] text-slate-400">
                    Email
                  </p>

                  <p className="mt-0.5 break-all text-sm font-medium text-[#173b3f]">
                    {patient.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-violet-50 text-violet-500">
                  <MapPin size={17} />
                </div>

                <div>
                  <p className="text-[11px] text-slate-400">
                    Location
                  </p>

                  <p className="mt-0.5 text-sm font-medium text-[#173b3f]">
                    {patient.location}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* EMERGENCY */}
          <section className="rounded-[22px] border border-red-100 bg-red-50/50 p-5">
            <div className="flex items-center gap-3">
              <ShieldAlert size={20} className="text-red-500" />

              <div>
                <h2 className="font-semibold text-[#173b3f]">
                  Emergency Contact
                </h2>

                <p className="mt-1 text-xs text-slate-400">
                  Primary emergency contact
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm font-medium text-[#173b3f]">
              {patient.emergencyContact}
            </p>
          </section>

          {/* ADMISSION */}
          <section className="rounded-[22px] border border-[#e5eeec] bg-white p-5">
            <div className="flex items-center gap-3">
              <BedDouble size={19} className="text-[#149883]" />

              <h2 className="font-semibold text-[#173b3f]">
                Admission Details
              </h2>
            </div>

            <div className="mt-5 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="text-xs text-slate-400">
                  Admission Date
                </span>

                <span className="text-sm font-medium text-[#173b3f]">
                  {patient.admissionDate}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="text-xs text-slate-400">
                  Bed
                </span>

                <span className="text-sm font-medium text-[#173b3f]">
                  {patient.bed}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  Status
                </span>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    statusStyle[patient.status]
                  }`}
                >
                  {patient.status}
                </span>
              </div>
            </div>
          </section>

          {/* BILLING */}
          <section className="rounded-[22px] border border-[#e5eeec] bg-white p-5">
            <div className="flex items-center gap-3">
              <CreditCard size={19} className="text-violet-500" />

              <div>
                <h2 className="font-semibold text-[#173b3f]">
                  Billing Summary
                </h2>

                <p className="mt-1 text-xs text-slate-400">
                  Current financial status
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-xl bg-[#f8fbfa] p-4">
              <p className="text-xs text-slate-400">
                Current Bill
              </p>

              <p className="mt-2 text-2xl font-semibold text-[#173b3f]">
                ₹18,450
              </p>

              <p className="mt-1 text-xs text-emerald-600">
                Insurance verification complete
              </p>
            </div>

            <Link
              to="/billing"
              className="mt-4 block w-full rounded-xl border border-[#d9ebe7] py-2.5 text-center text-sm font-medium text-[#149883]"
            >
              View Billing Details
            </Link>
          </section>

          {/* CARE TEAM */}
          <section className="rounded-[22px] border border-[#e5eeec] bg-white p-5">
            <div className="flex items-center gap-3">
              <UserRound size={19} className="text-[#149883]" />

              <h2 className="font-semibold text-[#173b3f]">
                Primary Care Team
              </h2>
            </div>

            <div className="mt-5 rounded-xl border border-slate-100 p-4">
              <p className="text-sm font-semibold text-[#173b3f]">
                {patient.doctor}
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Consultant · {patient.department}
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default PatientDetails;