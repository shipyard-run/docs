/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./styles.module.css";

function Footer() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const { themeConfig = {} } = siteConfig;
  const { footer } = themeConfig;

  if (!footer) {
    return null;
  }

  const { copyright, links = [], logo } = footer;

  return (
    <footer className={styles.footer}>
    <div className={styles.container}>
        <div className={styles.socialSection}>
            <img src="/img/shipyard_horizontal_small_white.png" width="120"/>
            <ul>
                <li><a href="https://github.com/shipyard-run" target="_blank" rel="noopener noreferrer" title="Github"
                        data-ga-footer="Social | Github"><svg width="22" height="21" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.999 0C4.926 0 0 4.82 0 10.766c0 4.757 3.152 8.791 7.523 10.215.55.1.75-.233.75-.519 0-.255-.009-.932-.014-1.83-3.06.65-3.706-1.444-3.706-1.444-.5-1.244-1.221-1.575-1.221-1.575-.999-.667.075-.654.075-.654 1.105.076 1.685 1.11 1.685 1.11.981 1.644 2.575 1.17 3.202.894.1-.696.384-1.17.698-1.44-2.442-.27-5.01-1.195-5.01-5.32 0-1.175.428-2.137 1.132-2.889-.114-.272-.491-1.367.108-2.849 0 0 .923-.29 3.025 1.104.877-.24 1.818-.358 2.753-.363.935.005 1.876.123 2.754.363 2.1-1.393 3.022-1.104 3.022-1.104.6 1.482.223 2.577.11 2.85.705.751 1.13 1.713 1.13 2.888 0 4.136-2.572 5.046-5.022 5.312.395.333.747.99.747 1.994 0 1.439-.014 2.6-.014 2.953 0 .288.199.623.756.518C18.851 19.553 22 15.521 22 10.766 22 4.82 17.074 0 10.999 0"
                                fill="#D0D2D5" fillRule="evenodd"></path>
                        </svg></a></li>
                <li><a href="https://twitter.com/shipyard_run" target="_blank" rel="noopener noreferrer" title="Twitter"
                        data-ga-footer="Social | Twitter"><svg width="24" height="20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M24 2.368a9.641 9.641 0 0 1-2.828.794A5.045 5.045 0 0 0 23.337.37a9.72 9.72 0 0 1-3.127 1.226A4.859 4.859 0 0 0 16.616 0c-2.719 0-4.924 2.261-4.924 5.049 0 .396.044.781.128 1.15C7.728 5.99 4.099 3.98 1.671.924a5.124 5.124 0 0 0-.667 2.539c0 1.751.869 3.297 2.191 4.203a4.844 4.844 0 0 1-2.231-.632v.063c0 2.446 1.697 4.487 3.95 4.95a4.844 4.844 0 0 1-2.224.087c.627 2.006 2.445 3.466 4.6 3.507A9.732 9.732 0 0 1 0 17.731 13.696 13.696 0 0 0 7.548 20c9.057 0 14.009-7.693 14.009-14.366 0-.218-.005-.435-.014-.652A10.157 10.157 0 0 0 24 2.368"
                                fill="#D0D2D5" fillRule="evenodd"></path>
                        </svg></a></li>
                <li><a href="https://www.youtube.com/channel/UCOAWUHJommP8aq63YRV8khA" target="_blank" rel="noopener noreferrer"
                        title="YouTube" data-ga-footer="Social | YouTube"><svg width="24" height="17"
                            xmlns="http://www.w3.org/2000/svg" fill="#D0D2D5">
                            <path
                                d="M9.522 11.553V4.81l6.484 3.383-6.484 3.36zM23.76 3.641s-.235-1.654-.954-2.382C21.893.303 20.87.3 20.401.243 17.043 0 12.005 0 12.005 0h-.01S6.957 0 3.599.243c-.47.055-1.492.06-2.406 1.016C.474 1.987.24 3.641.24 3.641S0 5.584 0 7.525v1.821c0 1.943.24 3.885.24 3.885s.234 1.654.953 2.382c.914.956 2.113.926 2.647 1.026 1.92.184 8.16.241 8.16.241s5.043-.007 8.401-.25c.47-.057 1.492-.061 2.405-1.017.72-.728.954-2.382.954-2.382s.24-1.942.24-3.885v-1.82c0-1.942-.24-3.885-.24-3.885z"
                                fillRule="evenodd"></path>
                        </svg></a></li>
            </ul>
        </div>
    </div>
  </footer>
  );
}

export default Footer;

        /*
        <div className={styles.secondarySection}>
            <ul>
                <li><a href="https://status.hashicorp.com/" data-ga-footer="Bottom | System Status">System Status</a>
                </li>
            </ul>
            <ul>
                <li><a href="https://www.hashicorp.com/terms-of-service" data-ga-footer="Bottom | Terms of Use">Terms of
                        Use</a></li>
                <li><a href="https://www.hashicorp.com/security" data-ga-footer="Bottom | Security">Security</a></li>
                <li><a href="https://www.hashicorp.com/privacy" data-ga-footer="Bottom | Privacy">Privacy</a></li>
            </ul>
        </div>
        */