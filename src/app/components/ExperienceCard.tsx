export function ExperienceCard({ title, company, date, bullets }: { title: string, company: string, date: string, bullets: string[] }) {
    return (
        <div className="p-5 bg-gray-50 rounded-lg shadow-sm border border-gray-200">
            <h4 className="text-xl font-bold text-gray-900">{title}</h4>
            <p className="text-md text-gray-600 mb-2">
                {company} | {date}
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
                {bullets.map((point, idx) => (
                    <li key={idx}>{point}</li>
                ))}
            </ul>
        </div>
    );
}