import { PhoneFrame } from "@/components/PhoneFrame";
import { SetupScreen } from "@/components/screens/SetupScreen";
import { ChipScreen } from "@/components/screens/ChipScreen";
import { PanelScreen } from "@/components/screens/PanelScreen";
import { OnboardingCarouselScreen } from "@/components/screens/OnboardingCarouselScreen";
import { PermissionsScreen } from "@/components/screens/PermissionsScreen";
import { HomeScreen } from "@/components/screens/HomeScreen";
import { HistoryScreen } from "@/components/screens/HistoryScreen";
import { SettingsScreen } from "@/components/screens/SettingsScreen";
import { LibraryScreen } from "@/components/screens/LibraryScreen";
import { EmptyStateScreen } from "@/components/screens/EmptyStateScreen";
import { ErrorScreen } from "@/components/screens/ErrorScreen";
import { NotificationScreen } from "@/components/screens/NotificationScreen";
import { QuickActionsScreen } from "@/components/screens/QuickActionsScreen";
import { LanguageScreen } from "@/components/screens/LanguageScreen";
import { CollectionDetailScreen } from "@/components/screens/CollectionDetailScreen";
import { ArticleDetailScreen } from "@/components/screens/ArticleDetailScreen";
import { DefaultModeScreen } from "@/components/screens/DefaultModeScreen";
import { ThemeScreen } from "@/components/screens/ThemeScreen";
import { ClearHistoryDialogScreen } from "@/components/screens/ClearHistoryDialogScreen";
import { NewCollectionSheetScreen } from "@/components/screens/NewCollectionSheetScreen";
import { ItemActionsSheetScreen } from "@/components/screens/ItemActionsSheetScreen";
import { DeleteCollectionDialogScreen } from "@/components/screens/DeleteCollectionDialogScreen";
import { DeleteArticleDialogScreen } from "@/components/screens/DeleteArticleDialogScreen";
import { SearchScreen } from "@/components/screens/SearchScreen";
import { SearchResultsScreen } from "@/components/screens/SearchResultsScreen";
import { ToastScreen } from "@/components/screens/ToastScreen";
import { AboutScreen } from "@/components/screens/AboutScreen";
import { ProfileScreen } from "@/components/screens/ProfileScreen";
import { PasteInputScreen } from "@/components/screens/PasteInputScreen";
import { HistoryMenuSheetScreen } from "@/components/screens/HistoryMenuSheetScreen";
import { FilterSheetScreen } from "@/components/screens/FilterSheetScreen";
import { ShareSheetScreen } from "@/components/screens/ShareSheetScreen";
import { HelpScreen } from "@/components/screens/HelpScreen";
import { FeedbackScreen } from "@/components/screens/FeedbackScreen";
import { EditProfileScreen } from "@/components/screens/EditProfileScreen";
import { LegalScreen } from "@/components/screens/LegalScreen";
import { FaqDetailScreen } from "@/components/screens/FaqDetailScreen";
import { SaveToCollectionSheetScreen } from "@/components/screens/SaveToCollectionSheetScreen";
import { LiveChatScreen } from "@/components/screens/LiveChatScreen";
import { PhotoPickerSheetScreen } from "@/components/screens/PhotoPickerSheetScreen";
import { Sparkles, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const Index = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <header className="sticky top-0 z-30 glass border-b border-border/60">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-accent flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" strokeWidth={2.4} />
            </div>
            <div>
              <p className="font-display text-[15px] font-bold text-foreground leading-none">Lumen</p>
              <p className="text-[10px] text-muted-foreground mt-0.5">UI / UX Preview · 41 screens</p>
            </div>
          </div>
          <button
            onClick={() => setDark(!dark)}
            className="w-9 h-9 rounded-full bg-secondary text-foreground flex items-center justify-center hover:bg-muted transition-colors"
            aria-label="Toggle theme"
          >
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative max-w-4xl mx-auto px-6 pt-16 pb-12 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-card border border-border/60 text-[11px] font-semibold text-muted-foreground mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Complete screen system · Material 3 inspired
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground tracking-tight leading-[1.05]">
            Every screen<br />
            <span className="bg-gradient-accent bg-clip-text text-transparent">your app needs.</span>
          </h1>
          <p className="mt-5 text-[15px] text-muted-foreground max-w-md mx-auto leading-relaxed">
            Onboarding, home, reading, history, library, settings, and every state in between.
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="max-w-7xl mx-auto px-6 pb-24 space-y-20">
        <Group n="01" title="Onboarding" subtitle="First-run experience">
          <PhoneFrame label="Welcome carousel" description="Three-step intro with progress dots.">
            <OnboardingCarouselScreen />
          </PhoneFrame>
          <PhoneFrame label="Setup" description="Two clear CTAs. No clutter, no decisions.">
            <SetupScreen />
          </PhoneFrame>
          <PhoneFrame label="Permissions" description="One row per permission, granted state inline.">
            <PermissionsScreen />
          </PhoneFrame>
        </Group>

        <Group n="02" title="Main app" subtitle="Daily use">
          <PhoneFrame label="Home" description="Greeting, quick action, stats, recent reads.">
            <HomeScreen />
          </PhoneFrame>
          <PhoneFrame label="History" description="Search, filter chips, grouped by time.">
            <HistoryScreen />
          </PhoneFrame>
          <PhoneFrame label="Library" description="Color-coded collections grid + recent saves.">
            <LibraryScreen />
          </PhoneFrame>
          <PhoneFrame label="Settings" description="Grouped Material 3 list with status card.">
            <SettingsScreen />
          </PhoneFrame>
        </Group>

        <Group n="03" title="The reading flow" subtitle="The core experience">
          <PhoneFrame label="Floating chip" description="Pill chip with pulse, appears after copy.">
            <ChipScreen />
          </PhoneFrame>
          <PhoneFrame label="Quick actions" description="Choose how to read before AI runs.">
            <QuickActionsScreen />
          </PhoneFrame>
          <PhoneFrame label="Loading" description="Skeleton shimmer — never a blank screen.">
            <PanelScreen variant="loading" />
          </PhoneFrame>
        </Group>

        <Group n="04" title="Reading panel · Tabs" subtitle="Four AI modes, one elegant sheet">
          <PhoneFrame label="Summary" description="Four numbered bullet cards.">
            <PanelScreen activeTab={0} />
          </PhoneFrame>
          <PhoneFrame label="Explain" description="Plain language with a callout.">
            <PanelScreen activeTab={1} />
          </PhoneFrame>
          <PhoneFrame label="Study" description="Definition + key terms list.">
            <PanelScreen activeTab={2} />
          </PhoneFrame>
          <PhoneFrame label="Deep Dive" description="Long-form context with examples.">
            <PanelScreen activeTab={3} />
          </PhoneFrame>
        </Group>

        <Group n="05" title="Panel states" subtitle="Same sheet, two modes">
          <PhoneFrame label="Default · 75%" description="Quick reading. Swipe down to dismiss.">
            <PanelScreen activeTab={3} />
          </PhoneFrame>
          <PhoneFrame label="Expanded · Full" description="Swipe up. Scroll position preserved.">
            <PanelScreen variant="expanded" activeTab={3} />
          </PhoneFrame>
        </Group>

        <Group n="06" title="Edge states" subtitle="Empty, error, system">
          <PhoneFrame label="Empty history" description="Friendly nudge to try the feature.">
            <EmptyStateScreen />
          </PhoneFrame>
          <PhoneFrame label="Error" description="Soft destructive tone with retry.">
            <ErrorScreen />
          </PhoneFrame>
          <PhoneFrame label="System notification" description="Persistent service notice with actions.">
            <NotificationScreen />
          </PhoneFrame>
          <PhoneFrame label="Language picker" description="Search + selected + grouped list.">
            <LanguageScreen />
          </PhoneFrame>
        </Group>

        <Group n="07" title="Destinations" subtitle="What every tap leads to">
          <PhoneFrame label="Collection detail" description="Tap a Library card → list of items inside.">
            <CollectionDetailScreen />
          </PhoneFrame>
          <PhoneFrame label="Article detail" description="Tap a recent save → full text + re-open AI.">
            <ArticleDetailScreen />
          </PhoneFrame>
          <PhoneFrame label="New collection" description="Tap + in Library → name + color picker sheet.">
            <NewCollectionSheetScreen />
          </PhoneFrame>
          <PhoneFrame label="Item actions" description="Long-press a save → Open / Move / Share / Delete.">
            <ItemActionsSheetScreen />
          </PhoneFrame>
          <PhoneFrame label="Default mode" description="Settings → Default mode → radio picker.">
            <DefaultModeScreen />
          </PhoneFrame>
          <PhoneFrame label="Theme" description="Settings → Theme → System / Light / Dark.">
            <ThemeScreen />
          </PhoneFrame>
          <PhoneFrame label="Clear history" description="Settings → Clear history → destructive confirm.">
            <ClearHistoryDialogScreen />
          </PhoneFrame>
        </Group>

        <Group n="08" title="Search & discovery" subtitle="Find anything, fast">
          <PhoneFrame label="Search" description="Tap search bar → recent + trending queries.">
            <SearchScreen />
          </PhoneFrame>
          <PhoneFrame label="Search results" description="Highlighted matches across reads.">
            <SearchResultsScreen />
          </PhoneFrame>
        </Group>

        <Group n="09" title="Confirmations & feedback" subtitle="Destructive + success states">
          <PhoneFrame label="Delete collection" description="Long-press → destructive confirm with item count.">
            <DeleteCollectionDialogScreen />
          </PhoneFrame>
          <PhoneFrame label="Delete article" description="Item actions → Delete → soft confirm.">
            <DeleteArticleDialogScreen />
          </PhoneFrame>
          <PhoneFrame label="Saved snackbar" description="After save → undo-able toast pinned above nav.">
            <ToastScreen />
          </PhoneFrame>
        </Group>

        <Group n="10" title="Meta" subtitle="App info">
          <PhoneFrame label="About" description="Version, rate, legal, support — all in one.">
            <AboutScreen />
          </PhoneFrame>
        </Group>

        <Group n="11" title="Connectors" subtitle="Closing every loose tap">
          <PhoneFrame label="Profile" description="Tap avatar on Home → stats, account, sign out.">
            <ProfileScreen />
          </PhoneFrame>
          <PhoneFrame label="Paste text" description="Tap 'Try with my own text' → paste & analyze.">
            <PasteInputScreen />
          </PhoneFrame>
          <PhoneFrame label="History menu" description="Tap ⋯ on History → sort, filter, export, clear.">
            <HistoryMenuSheetScreen />
          </PhoneFrame>
          <PhoneFrame label="Filter" description="Tap a filter chip → date, mode, collection picker.">
            <FilterSheetScreen />
          </PhoneFrame>
          <PhoneFrame label="Share" description="Item actions → Share → app picker + export options.">
            <ShareSheetScreen />
          </PhoneFrame>
          <PhoneFrame label="Help" description="Settings → Help → search, topics, FAQs, contact.">
            <HelpScreen />
          </PhoneFrame>
          <PhoneFrame label="Feedback" description="Settings → Feedback → mood + type + message.">
            <FeedbackScreen />
          </PhoneFrame>
        </Group>

        <Group n="12" title="Final loops" subtitle="Closing the last taps">
          <PhoneFrame label="Edit profile" description="Profile → Edit profile → name, photo, bio.">
            <EditProfileScreen />
          </PhoneFrame>
          <PhoneFrame label="Legal" description="About → Legal → terms, privacy, licenses.">
            <LegalScreen />
          </PhoneFrame>
          <PhoneFrame label="Help article" description="Help → tap a topic → full FAQ article.">
            <FaqDetailScreen />
          </PhoneFrame>
          <PhoneFrame label="Save to collection" description="Item actions → Save → pick a collection.">
            <SaveToCollectionSheetScreen />
          </PhoneFrame>
          <PhoneFrame label="Live chat" description="Help → Live chat → talk to support in-app.">
            <LiveChatScreen />
          </PhoneFrame>
          <PhoneFrame label="Photo picker" description="Edit profile → camera icon → pick photo source.">
            <PhotoPickerSheetScreen />
          </PhoneFrame>
        </Group>
      </section>

      <footer className="border-t border-border/60 py-8 text-center text-[12px] text-muted-foreground">
        Lumen — visual system · 41 screens · Material 3 principles
      </footer>
    </div>
  );
};

const Group = ({
  n,
  title,
  subtitle,
  children,
}: {
  n: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) => (
  <div>
    <div className="flex items-baseline gap-3 mb-2">
      <span className="font-display text-[11px] font-bold text-accent tracking-widest">{n}</span>
      <div className="h-px flex-1 bg-border" />
    </div>
    <div className="flex items-baseline justify-between mb-10">
      <h2 className="font-display text-2xl font-bold text-foreground tracking-tight">{title}</h2>
      <p className="text-[12px] text-muted-foreground">{subtitle}</p>
    </div>
    <div className="grid place-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
      {children}
    </div>
  </div>
);

export default Index;
