import Sheet, { SheetRef } from "react-modal-sheet";
import React, { useEffect, useState, useRef } from "react";
import "./index.css";
import SizeIcon from "../../../../../assets/svg/size.svg";
import { SizeData, SizesEnum } from "../../../../../models/sizeData";

interface SizeBottomSheetProps {
  isOpen: boolean;
  onClose: () => void; // Callback function to handle sheet closing
}

const SizeBottomSheet: React.FC<SizeBottomSheetProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedSize, setSelectedSize] = useState<SizeData>();
  const [isSheetOpen, setSheetOpen] = useState(isOpen);
  const bodyRef = useRef<SheetRef>(null);

  useEffect(() => {
    setSheetOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    if (bodyRef.current) {
      // Calculate height based on content
      // Set the height to the content height
    }
  }, [isSheetOpen]);

  const Sizes: SizeData[] = [
    {
      id: "0",
      size: SizesEnum.XS,
      available: true,
    },
    {
      id: "1",
      size: SizesEnum.S,
      available: true,
    },
    {
      id: "2",
      size: SizesEnum.M,
      available: true,
    },
    {
      id: "3",
      size: SizesEnum.L,
      available: true,
    },
    {
      id: "4",
      size: SizesEnum.XL,
      available: true,
    },
    {
      id: "5",
      size: SizesEnum.XXL,
      available: false,
    },
  ];

  const handleCloseSheet = () => {
    setSheetOpen(false);
    onClose(); // Call the onClose callback to notify the parent component
  };

  return (
    <Sheet
      isOpen={isSheetOpen}
      ref={bodyRef}
      onClose={handleCloseSheet}
      detent="content-height"
    >
      <Sheet.Container className="body">
        <Sheet.Header />
        <div>
          <Sheet.Content>
            <div style={{ margin: "11px" }} className="heading">
              <div className="text">Please select your preferred size</div>
              <div style={{ marginTop: "0px" }} className="heading">
                <img
                  src={SizeIcon}
                  style={{ marginRight: "9px" }}
                  alt="Size Icon"
                />
                <div className="text">Size Chart</div>
              </div>
            </div>
            <div className="grid-container">
              {Sizes.map((item) => {
                return (
                  <div
                    key={item.id} // Key should be unique for each element in the array
                    style={{
                      backgroundColor:
                        selectedSize?.size === item.size ? "black" : "white",
                    }}
                    className="grid-item"
                  >
                    <div
                      onClick={() => {
                        if (item.available) {
                          setSelectedSize(item);
                        }
                      }}
                      style={{
                        color: !item.available
                          ? "#BDBDBD"
                          : selectedSize?.size === item.size
                          ? "white"
                          : "black",
                        textDecoration: !item.available
                          ? "line-through"
                          : "none",
                      }}
                    >
                      {item.size}
                    </div>
                  </div>
                );
              })}
            </div>
          </Sheet.Content>
        </div>
      </Sheet.Container>
      <Sheet.Backdrop onTap={handleCloseSheet} />
    </Sheet>
  );
};

export default SizeBottomSheet;
