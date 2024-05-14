import connectDB from "@/utils/ConnectDB";
import Resume from "@/utils/Models/ResumeModel";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const formData = await request.formData();

    const resume = formData.get("resume");
    
    console.log("Uploaded resume:", resume);

    const { size, type, name, lastModified } = resume;
    // await connectDB();
    // await Resume.create({
    //   size,
    //   type,
    //   name,
    //   lastModified,
    // });

    return NextResponse.json(
      { message: "resume uploaded Successfuly" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error handling resume upload:", error);
    return NextResponse.json(
      { message: "Error handling resume upload" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();
    const resume = await Resume.find();
    const lastResume = resume.pop();

    //  const publicFolder = path.join(__dirname,'../../../../../../public/documents')
    //  const writeStream = fs.createWriteStream(path.join(publicFolder, lastResume.name));

    //   console.log(writeStream);
    // console.log(path.join(__dirname,'../../../../../../public/documents'))
    return NextResponse.json({ lastResume }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "error in getting resume" },
      { status: 500 }
    );
  }
}
