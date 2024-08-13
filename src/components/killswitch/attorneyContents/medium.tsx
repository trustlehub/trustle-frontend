import { useAuth0 } from "@auth0/auth0-react";

function Medium(url: string) {
  const { user } = useAuth0();

  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-primary font-medium text-xl leading- text-grey-900">
        Grant of power
      </h1>
      <h1 className="font-secondary text-sm text-grey-700">
        I, {user?.name}, hereby grant Trustle, a limited power of attorney to
        act as my attorney-in-fact for the sole and specific purpose of removing
        my Last.fm account ("Last.fm Account") (hereinafter referred to as "the
        Account") owned by Last.fm Limited, including any associated content and
        data. I understand and agree that this power of attorney is being
        granted for the purpose of utilising Trustle's KillSwitch service to
        initiate and facilitate the removal of my Last.fm account. I authorise
        Trustle, through its KillSwitch service, to carry out the following
        procedure for the removal of the Account:
        <br />
        <br />
        Access: My Attorney-in-Fact is authorised to access the Last.fm account
        associated with the following URL: {url}.
        <br />
        <br />
        Removal Request: My Attorney-in-Fact shall use the KillSwitch service to
        send a removal request to Last.fm Limited, requesting the permanent
        deletion of the Account.
        <br />
        <br />
        Communication: My Attorney-in-Fact is authorised to communicate with
        Last.fm Limited, as necessary, to facilitate the removal process. This
        includes but is not limited to responding to any verification or
        confirmation requests from Last.fm Limited.
        <br />
        <br />
        Verification: My Attorney-in-Fact is authorised to provide any necessary
        verification or identification information to Last.fm Limited, to
        confirm my identity as the account holder, as required by Last.fm
        Limited, for account removal.
        <br />
        <br />
        Completion: Upon successful removal of the Account, my Attorney-in-Fact
        shall confirm and document the removal process, including any
        confirmation messages or notifications received from Last.fm Limited.
        <br />
        <br />
        This limited power of attorney is effective from the date of its
        execution and shall remain in full force and effect until the removal of
        the Account is completed and confirmed. It is understood that Trustle
        shall act in accordance with Last.fm Limited’s policies and procedures
        governing account removal.
        <br />
        <br />
        I affirm that I am the legal owner of the Last.fm account identified
        above and that I voluntarily grant this limited power of attorney to
        Trustle. I also acknowledge that I have reviewed and agreed to Trustle's
        Terms of Use and Privacy Policy.
        <br />
        <br />
        I understand that Trustle is not responsible for any consequences that
        may arise from the removal of my Last.fm account, including the loss of
        data, contacts, or other information associated with the Account.
        <br />
        <br />
        This limited power of attorney is governed by the laws of Sweden, and
        any disputes arising from or related to its execution or enforcement
        shall be resolved in accordance with Trustle's Terms of Use.
      </h1>
    </div>
  );
}

export default Medium;
