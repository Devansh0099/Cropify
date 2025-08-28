export async function analyzeCrop(file: File) {
  try {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/linkanjarad/mobilenet_v2_1.0_224-plant-disease-identification",
      {
        method: "POST",
        headers: {
          Authorization: "Bearer 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",
          
        },
        body: file,
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    console.log("Prediction:", result);
    return result;
  } catch (error) {
    console.error("Error analyzing crop:", error);
    throw error;
  }
}
