import { TabsContent } from "@radix-ui/react-tabs";

const bio =
  "私は旅行と技術が大好きなフロントエンドエンジニアです。常に新しいアイデアと体験を探求しています。";

const interests = ["プログラミング", "旅行", "写真", "映画鑑賞", "登山"];

const travel = {
  title: "訪問した国",
  description:
    "これまでに以下の国々を旅してきました。文化や人々との出会いは私の人生に大きな影響を与えています。",
  countries: ["日本", "インド", "タイ", "ベトナム", "フランス", "イギリス"],
};

export const PersonalTab = () => {
  return (
    <TabsContent value="personal" className="space-y-8">
      <h2 className="text-2xl font-bold">パーソナル情報</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p className="text-gray-600">{bio}</p>

          <h3 className="text-xl font-bold mt-8">興味・関心</h3>
          <div className="flex flex-wrap gap-3 mt-4">
            {interests.map((interest, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold">{travel.title}</h3>
          <p className="text-gray-600 mt-2">{travel.description}</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
            {travel.countries.map((country, index) => (
              <div key={index} className="text-center p-3 border rounded-lg">
                {country}
              </div>
            ))}
          </div>
        </div>
      </div>
    </TabsContent>
  );
};
