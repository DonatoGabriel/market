import { StyledHeader } from "../styles/home-style";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export function Header() {
  return (
    <StyledHeader>
      <span>Tech Store</span>
      <ShoppingCartIcon />
    </StyledHeader>
  );
}
