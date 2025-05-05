import { TabsContent } from "@radix-ui/react-tabs";

const educationItems = [
  {
    period: "2015 - 2019",
    degree: "学士（情報科学）",
    institution: "○○大学",
    description: "主にプログラミングやアルゴリズムを学びました。",
  },
  // 必要に応じて追加
];

const certificationItems = [
  {
    year: "2018",
    name: "ITパスポート",
    issuer: "IPA",
  },
  {
    year: "2020",
    name: "基本情報技術者試験",
    issuer: "IPA",
  },
  // 必要に応じて追加
];

export const EducationTab = () => {
  return (
    <TabsContent value="education" className="space-y-8">
      <h2 className="text-2xl font-bold">学歴</h2>
      <div className="space-y-12">
        {educationItems.map((edu, index) => (
          <div key={index} className="relative pl-8 border-l-2 border-rose-200">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-rose-500"></div>
            <div className="space-y-2">
              <div className="text-sm text-rose-500">{edu.period}</div>
              <h3 className="text-xl font-bold">{edu.degree}</h3>
              <div className="text-gray-600 font-medium">{edu.institution}</div>
              <p className="text-gray-600">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mt-12">資格</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificationItems.map((cert, index) => (
          <div
            key={index}
            className="border rounded-lg p-6 hover:shadow-md transition-shadow"
          >
            <div className="text-sm text-rose-500">{cert.year}</div>
            <h3 className="text-lg font-bold">{cert.name}</h3>
            <div className="text-gray-600">{cert.issuer}</div>
          </div>
        ))}
      </div>
    </TabsContent>
  );
};
