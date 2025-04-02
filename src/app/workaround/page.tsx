import Image from "next/image";
import {MdTab, MdTabs} from "@miljodirektoratet/md-react";
import '@miljodirektoratet/md-css';

export default function Workaround() {
    // @ts-ignore
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <MdTabs
                    chipsPrefixIcon={null}
                    initialTab={0}
                >
                    <div title="Tab 1">
                        <MdTab title="Tab 1">
                            <div
                                style={{
                                    fontSize: '20px',
                                    marginBottom: '.5em'
                                }}
                            >
                                This is the first tab
                            </div>
                            <div>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro maiores reprehenderit quasi itaque eveniet soluta aliquam consectetur perspiciatis assumenda laborum quam expedita, vitae, odio dignissimos obcaecati ipsa incidunt! Pariatur, blanditiis.
                            </div>
                        </MdTab>
                    </div>

                    <fieldset title="Tab 2" disabled>
                        <MdTab
                            title="Tab 2"
                        >
                            <div
                                style={{
                                    fontSize: '20px',
                                    marginBottom: '.5em'
                                }}
                            >
                                This is the second tab
                            </div>
                            <div>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum unde labore sint, nesciunt quasi non molestias cupiditate. Saepe quasi natus quis magnam quas. Quae, similique facilis? Architecto, temporibus minima! Laudantium.
                            </div>
                        </MdTab>
                    </fieldset>
                </MdTabs>
            </main>
            <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/file.svg"
                        alt="File icon"
                        width={16}
                        height={16}
                    />
                    Learn
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/window.svg"
                        alt="Window icon"
                        width={16}
                        height={16}
                    />
                    Examples
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/globe.svg"
                        alt="Globe icon"
                        width={16}
                        height={16}
                    />
                    Go to nextjs.org →
                </a>
            </footer>
        </div>
    );
}
