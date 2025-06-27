import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import ImageBannerSlider from "../../components/ImageBannerSlider";
import { MemoryRouter } from "react-router-dom"; //
import { FaMotorcycle } from "react-icons/fa";

const banners = [
  {
    id: 1,
    text: "Check out the new Royal Enfield!",
    img: "/assets/Icons/Banners/Banner-1.jpg",
    path: "/products/royal-enfield-meteor-350",
  },
  {
    id: 2,
    text: "Check out the new KTM1290 Super Duke-R!",
    img: "/assets/Icons/Banners/Banner-2.jpeg",
    path: "/products/ktm-1290-super-duke-r",
  },
  {
    id: 3,
    text: "Ready for some more KTM action?",
    img: "/assets/Icons/Banners/banner-3.jpeg",
    path: "/products/ktm-790-duke",
  },
];

describe("ImageBannerSlider", () => {
  it("should render links with images that are passed in the array gotten from props", () => {
    render(
      <MemoryRouter>
        <ImageBannerSlider />
      </MemoryRouter>
    );

    screen.debug();

    banners.forEach((motorcycle) => {
      const bannerText = screen.getByText(motorcycle.text);
      const bannerImage = screen.getByRole("img", { name: motorcycle.text });
      const banner = bannerText.closest("div");
      const link = screen.getByRole("link", { name: motorcycle.text });

      expect(bannerText).toBeInTheDocument();
      expect(bannerImage).toBeInTheDocument();
      expect(banner).toBeInTheDocument();
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", motorcycle.path);
    });
  });
});
