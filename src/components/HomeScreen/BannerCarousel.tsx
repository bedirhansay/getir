import { FlatList, Image } from "react-native";
import { useState } from "react";
import bannersConstant from "assets/bannersConstant";

export const BannerCarousel = () => {
  const [banners, setBanners] = useState(bannersConstant);

  return (
    <FlatList
      data={banners}
      renderItem={(item) => (
        <Image
          style={{
            resizeMode: "stretch",
          }}
          className="w-screen h-48"
          source={{ uri: item.item }}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToAlignment="center"
      decelerationRate={"fast"}
      pagingEnabled={true}
    ></FlatList>
  );
};
