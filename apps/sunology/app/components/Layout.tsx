import type {
  CartApiQueryFragment,
  FooterQuery,
  HeaderQuery,
} from 'storefrontapi.generated';

export type LayoutProps = {
  cart: Promise<CartApiQueryFragment | null>;
  children?: React.ReactNode;
  footer: Promise<FooterQuery>;
  header: HeaderQuery;
  isLoggedIn: boolean;
};

export function Layout({
  cart,
  children = null,
  footer,
  header,
  isLoggedIn,
}: LayoutProps) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
