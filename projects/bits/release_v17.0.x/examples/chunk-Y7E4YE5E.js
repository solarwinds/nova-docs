import"./chunk-XR34LRGE.js";var t=`<h1>What is a convenience component?</h1>
<p>
    A convenience component is a composition of several bits components into a
    larger component that's pre-configured/pre-implemented to accommodate the
    majority of use cases within its problem set. In addition to reusability, a
    convenience component is optimized for ease-of-use, meaning its internal
    workings are hidden away and you shouldn't have to fuss too much to get it
    working. The public interface is ideally as small as possible and relatively
    straight-forward.
</p>

<h1>Sounds great! What's the catch?</h1>
<p>
    Well, there are a couple of things that could be considered drawbacks, but
    hopefully the benefits, more often than not, outweigh any downsides.
</p>
<ol>
    <li>
        <p>
            An easy-to-use, small interface comes at the cost of flexibility
            which means, if you want a convenience component to do something out
            of the ordinary, you may need to instead use the requisite bits
            components to create your own custom version of the larger
            component.
        </p>

        <p>
            This relative lack of flexibility may be an insurmountable
            inconvenience in some cases, but to mitigate at least some of the
            reduction in flexibility, wherever it's practical, a convenience
            component will provide projection slots to:
        </p>

        <ol type="a">
            <li>
                Allow certain nested components to be optional or
                interchangeable with other components
            </li>
            <li>Allow for a very limited amount of layout flexibility</li>
        </ol>
    </li>
    <br />
    <li>
        A convenience component's interface is itself pretty rigid and resistant
        to change to ensure that the internal overhead of maintaining the
        component is minimized. So, adding features to a convenience component
        is a rare occurrence, and this could be another reason you might need to
        implement your own composition instead of using a convenience component.
    </li>
</ol>
`;export{t as default};
