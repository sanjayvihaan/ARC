"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, Phone, Search } from 'lucide-react'
import Image from "next/image";


import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { ModeToggle } from "@/components/mode-toggle"

const navItems = [
  { title: "Home", href: "/" },
  { 
    title: "About", 
    href: "/about",
    subItems: [
      { title: "Our Story", href: "/about/story" },
      { title: "Team", href: "/about/team" },
      { title: "Careers", href: "/about/careers" },
    ]
  },
  { 
    title: "Services", 
    href: "/services",
    subItems: [
      { title: "Land Banking", href: "/services/land-banking" },
      { title: "Industrial Parks", href: "/services/industrial-parks" },
      { title: "Business Parks", href: "/services/business-parks" },
      { title: "Residential Spaces", href: "/services/residential" },
    ]
  },
  { title: "Projects", href: "/projects" },
  { title: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [isSearchOpen, setIsSearchOpen] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b"
          : "bg-background"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/ARCLogo.png" alt="ARC Construction Logo" width={50} height={50} className="h-12 w-auto" />
            {/* <span className="hidden font-bold sm:inline-block">ARC Construction</span> */}
          </Link>

          <nav className="hidden md:flex items-center space-x-4">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    {item.subItems ? (
                      <>
                        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {item.subItems.map((subItem) => (
                              <ListItem
                                key={subItem.title}
                                title={subItem.title}
                                href={subItem.href}
                              >
                                {/* {subItem.description} */}
                              </ListItem>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link href={item.href} legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          {item.title}
                        </NavigationMenuLink>
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:inline-flex"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <ModeToggle />
            <Button size="sm" className="hidden md:inline-flex">
              <Phone className="mr-2 h-4 w-4" /> Get a Quote
            </Button>
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <MobileMenu
                  items={navItems}
                  pathname={pathname}
                  onClose={() => setIsMobileMenuOpen(false)}
                />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="border-t"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center">
                <Input
                  type="search"
                  placeholder="Search..."
                  className="flex-grow"
                />
                <Button type="submit" size="sm" className="ml-2">
                  Search
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

function MobileMenu({ items, pathname, onClose }: { 
  items: typeof navItems, 
  pathname: string, 
  onClose: () => void 
}) {
  return (
    <nav className="flex flex-col gap-4">
      <div className="flex items-center justify-between mb-4">
        <Link href="/" className="flex items-center space-x-2" onClick={onClose}>
          <Image src="/logo.svg" alt="ARC Construction Logo" className="h-8 w-auto" />
          <span className="font-bold">ARC Construction</span>
        </Link>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-5 w-5" />
        </Button>
      </div>
      {items.map((item) => (
        <React.Fragment key={item.title}>
          {item.subItems ? (
            <MobileNavAccordion title={item.title}>
              {item.subItems.map((subItem) => (
                <MobileNavItem
                  key={subItem.title}
                  href={subItem.href}
                  active={pathname === subItem.href}
                  onClick={onClose}
                >
                  {subItem.title}
                </MobileNavItem>
              ))}
            </MobileNavAccordion>
          ) : (
            <MobileNavItem
              href={item.href}
              active={pathname === item.href}
              onClick={onClose}
            >
              {item.title}
            </MobileNavItem>
          )}
        </React.Fragment>
      ))}
      <div className="mt-4 space-y-4">
        <Button className="w-full">
          <Phone className="mr-2 h-4 w-4" /> Get a Quote
        </Button>
        <div className="flex items-center justify-between">
          <ModeToggle />
          <Button variant="outline" size="sm" onClick={onClose}>
            Close Menu
          </Button>
        </div>
      </div>
    </nav>
  )
}

function MobileNavItem({ href, children, active, onClick }: { 
  href: string
  children: React.ReactNode
  active: boolean
  onClick: () => void 
}) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center space-x-2 rounded-md px-2 py-1 text-sm font-medium",
        active ? "bg-accent text-accent-foreground" : "hover:bg-accent hover:text-accent-foreground"
      )}
      onClick={onClick}
    >
      <span>{children}</span>
    </Link>
  )
}

function MobileNavAccordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div>
      <button
        className="flex w-full items-center justify-between rounded-md px-2 py-1 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="ml-4 mt-1 space-y-1"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

